---
type: method
interface: IBody2
member: IGetProcessedBodyWithSelFace
returns: Body2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetFirstSelectedFace
  - IBody2.GetNextSelectedFace
  - IBody2.GetProcessedBody2
  - IBody2.GetProcessedBodyWithSelFace
  - IBody2.GetSelectedFaceCount
  - IBody2.GetSelectedFaces
  - IBody2.IGetFirstFace
  - IBody2.IGetNextSelectedFace
  - IBody2.IGetSelectedFaces
keywords:
  - bodies
  - see
  - also
  - ibody2
  - processed
  - igetprocessedbodywithselface
  - body2
  - body
  - sel
  - face
---

# IBody2.IGetProcessedBodyWithSelFace

Gets a processed body.

## Signature

```csharp
Body2 IGetProcessedBodyWithSelFace()
```
## Parameters

None.

## Return Value

Pointer to the IBody2 object; this body is a copy of the body for this part

## Remarks

This method requires that you preselect a face.

## See Also

- `IBody2.GetFirstSelectedFace`
- `IBody2.GetNextSelectedFace`
- `IBody2.GetProcessedBody2`
- `IBody2.GetProcessedBodyWithSelFace`
- `IBody2.GetSelectedFaceCount`
- `IBody2.GetSelectedFaces`
- `IBody2.IGetFirstFace`
- `IBody2.IGetNextSelectedFace`
- `IBody2.IGetSelectedFaces`