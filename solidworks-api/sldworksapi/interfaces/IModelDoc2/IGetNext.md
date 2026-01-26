---
type: method
interface: IModelDoc2
member: IGetNext
returns: ModelDoc2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetNext
keywords:
  - document
  - igetnext
  - imodeldoc2
  - model
  - doc2
  - next
---

# IModelDoc2.IGetNext

Gets the next document opened in the current SOLIDWORKS Design session.

## Signature

```csharp
ModelDoc2 IGetNext()
```
## Parameters

None.

## Return Value

Next model document opened in the current SOLIDWORKS Design session

## Remarks

To traverse all documents open in this SOLIDWORKS Design session, the first IModleDoc2 object that calls this method must have been returned from
ISldWorks::IGetFirstDocument2
.
NOTE:
This method is available in datecode 1999/207 and later.

## See Also

- `IModelDoc2.GetNext`