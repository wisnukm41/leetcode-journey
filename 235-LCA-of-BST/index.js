// Not My Code
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = (root, p, q)=>{
    // If the value of root node is greater than the value of p node and less than the value of q node...
    if(root.val > p.val && root.val < q.val){
        return root;
    }
    // If the value of p node and the q node is less than the value of root node...
    else if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q);
    }
    // If the value of p node and the q node is greater than the value of root node...
    else if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
}