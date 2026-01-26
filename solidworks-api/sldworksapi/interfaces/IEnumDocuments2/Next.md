---
type: method
interface: IEnumDocuments2
member: Next
returns: void
parameters:
  -
    name: Celt
    type: System.Int32
    description: Number of documents for the documents enumeration
  -
    name: Rgelt
    type: ModelDoc2
    description: Pointer to an array of documents of size Celt
  -
    name: PceltFetched
    type: System.Int32
    description: Pointer to the number of documents returned from the list; this value can be less than Celt if you ask for more documents than exist, or it can be NULL if no more documents exist.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
related: []
keywords:
  - next
  - ienumdocuments2
  - documents2
  - celt
  - int32
  - rgelt
  - model
  - doc2
  - pcelt
  - fetched
  - void
  - list
  - open
  - documents
  - traverse
  - all
---

# IEnumDocuments2.Next

Gets the next document in the documents enumeration.

## Signature

```csharp
void Next( 
   System.Int32
Celt
,
   out ModelDoc2
Rgelt
,
   out System.Int32
PceltFetched
)
```
## Parameters

- `Celt` (System.Int32): Number of documents for the documents enumeration
- `Rgelt` (ModelDoc2): Pointer to an array of documents of size Celt
- `PceltFetched` (System.Int32): Pointer to the number of documents returned from the list; this value can be less than Celt if you ask for more documents than exist, or it can be NULL if no more documents exist.

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.

## Examples

- Get List of Open Documents (C++) (Get_List_of_Open_Documents_Example_CPlusPlus_COM.htm)
- Traverse All Open Documents (C++) (Traverse_All_Open_Documents_Example_CPlusPlus_COM.htm)