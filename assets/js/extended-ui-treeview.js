/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/**
 * Treeview (jquery)
 */

'use strict';

$(function () {
  var theme = $('html').hasClass('light-style') ? 'default' : 'default-dark',
    basicTree = $('#jstree-basic'),
    customIconsTree = $('#jstree-custom-icons'),
    contextMenu = $('#jstree-context-menu'),
    dragDrop = $('#jstree-drag-drop'),
    checkboxTree = $('#jstree-checkbox'),
    ajaxTree = $('#jstree-ajax');

  // Ajax Example
  // --------------------------------------------------------------------
  if (ajaxTree.length) {
    ajaxTree.jstree({
      core: {
        themes: {
          name: theme
        },
        data: {
          url: 'https://mocki.io/v1/e328d63c-db46-408e-96b5-1d97775f4d38',
          dataType: 'json',
          data: function (node) {
            return {
              id: node.id
            };
            console.log(node)
          }
        }
      },
      plugins: ['types', 'state'],
      types: {
        default: {
          icon: 'ti ti-folder'
        },
        html: {
          icon: 'ti ti-brand-html5 text-danger'
        },
        css: {
          icon: 'ti ti-brand-css3 text-info'
        },
        img: {
          icon: 'ti ti-photo text-success'
        },
        js: {
          icon: 'ti ti-brand-javascript text-warning'
        }
      }
    });
  }
});
