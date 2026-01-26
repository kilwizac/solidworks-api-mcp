---
type: method
interface: IModelDoc2
member: GetNext
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.IGetNext
keywords:
  - document
  - getnext
  - imodeldoc2
  - model
  - doc2
  - next
  - object
  - determine
  - dirty
  - vba
  - names
  - open
  - documents
  - components
  - window
  - handles
  - dibsections
  - vb
  - net
---

# IModelDoc2.GetNext

Gets the next document opened in the current SOLIDWORKS Design session.

## Signature

```csharp
System.Object GetNext()
```
## Parameters

None.

## Return Value

Next model document opened in the current SOLIDWORKS Design session

## Remarks

To traverse all documents open in this SOLIDWORKS Design session,
ISldWorks::GetFirstDocument
must have returned the first IModleDoc2 object that calls this method.

## Examples

- Determine If Document Is Dirty (VBA) (Determine_if_Document_is_Dirty_Example_VB.htm)
- Get Names of Open Documents (VBA) (Get_Names_of_Open_Documents_Example_VB.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (C#) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_CSharp.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VB.NET) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VBNET.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VBA) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VB.htm)

## See Also

- `IModelDoc2.IGetNext`