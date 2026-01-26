---
type: method
interface: IModeler
member: ISplitFaceOnParam2
returns: Face2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.SplitFaceOnParam
keywords:
  - split
  - faces
  - face
  - see
  - also
  - iface2
  - isplitfaceonparam2
  - imodeler
  - modeler
  - param2
  - face2
---

# IModeler.ISplitFaceOnParam2

Splits and retrieves the faces on the U or V parameter.

## Signature

```csharp
Face2 ISplitFaceOnParam2()
```
## Parameters

None.

## Return Value

Array of new faces

## Remarks

The split is defined by calling
IModeler::ISplitFaceOnParamCount2
. Then call this method to retrieve the list of new faces allocated.

## See Also

- `IModeler.SplitFaceOnParam`