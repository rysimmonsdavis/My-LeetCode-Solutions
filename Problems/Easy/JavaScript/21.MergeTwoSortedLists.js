/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1HeadNodePtr, list2HeadNodePtr) {
    
    var list1CurrNodePtr = list1HeadNodePtr; 
    var list2CurrNodePtr = list2HeadNodePtr; 

    var list3HeadNodePtr = new ListNode; 
    var list3CurrNodePtr = list3HeadNodePtr; 


    if (list1HeadNodePtr && list2HeadNodePtr){ 
        while (list1CurrNodePtr || list2CurrNodePtr) {

            if (list1CurrNodePtr && list2CurrNodePtr ){ 

                if (list1CurrNodePtr.val <= list2CurrNodePtr.val){
                
                list3CurrNodePtr.val = list1CurrNodePtr.val; 
                list1CurrNodePtr = list1CurrNodePtr.next; 

                } else if (list1CurrNodePtr.val > list2CurrNodePtr.val){

                list3CurrNodePtr.val = list2CurrNodePtr.val; 
                list2CurrNodePtr = list2CurrNodePtr.next; 

                }

            } else if (list1CurrNodePtr && !list2CurrNodePtr ){  

                list3CurrNodePtr.val = list1CurrNodePtr.val; 
                list1CurrNodePtr = list1CurrNodePtr.next; 

            } else if (!list1CurrNodePtr && list2CurrNodePtr ){  

                list3CurrNodePtr.val = list2CurrNodePtr.val; 
                list2CurrNodePtr = list2CurrNodePtr.next; 

            }

            if (list1CurrNodePtr || list2CurrNodePtr) {
                var list3NewNodePtr = new ListNode; 
                list3CurrNodePtr.next = list3NewNodePtr; 
                list3CurrNodePtr = list3NewNodePtr; 
            }

        } 

        return list3HeadNodePtr;

    } else {

        if (list1CurrNodePtr){

            return list1CurrNodePtr;
        
        } else if (list2CurrNodePtr){

            return list2CurrNodePtr;

        } else {

            return null;

        }

    }
    
};