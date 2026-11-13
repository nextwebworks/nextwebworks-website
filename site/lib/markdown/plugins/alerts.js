// site/lib/markdown/plugins/alerts.js - GitHub-style blockquote alerts AST transformer (> [!NOTE], etc.)

const ALERT_TYPES = new Set(['note', 'tip', 'important', 'warning', 'caution']);

/**
 * Remark plugin to transform GitHub-style alert callouts into structured HAST container nodes.
 * Supports > [!NOTE], > [!TIP], > [!IMPORTANT], > [!WARNING], and > [!CAUTION].
 *
 * @returns {Function} MDAST transformer
 */
export function remarkGithubAlerts() {
  return (tree) => {
    function visit(node) {
      if (node.type === 'blockquote' && Array.isArray(node.children) && node.children.length > 0) {
        const firstChild = node.children[0];
        if (firstChild?.type === 'paragraph' && Array.isArray(firstChild.children) && firstChild.children.length > 0) {
          const firstText = firstChild.children[0];
          if (firstText?.type === 'text') {
            const match = firstText.value.match(/^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*(.*)/i);
            if (match) {
              const alertType = match[1].toLowerCase();
              if (ALERT_TYPES.has(alertType)) {
                const remaining = match[2];
                if (remaining) {
                  firstText.value = remaining;
                } else {
                  firstChild.children.shift();
                }

                // If paragraph is now empty, remove it
                if (firstChild.children.length === 0) {
                  node.children.shift();
                }

                // Re-tag blockquote as alert container for HAST conversion
                node.data = node.data || {};
                node.data.hName = 'div';
                node.data.hProperties = {
                  className: 'nww-markdown-alert',
                  'data-alert-type': alertType,
                };
              }
            }
          }
        }
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    }

    visit(tree);
  };
}

