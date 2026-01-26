---
type: method
interface: IPartDoc
member: IGetProcessedBodyWithSelFace2
returns: Body2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - geometry
  - parts
  - ui
related:
  - IBody2.GetProcessedBody2
  - IBody2.GetProcessedBodyWithSelFace
  - IBody2.IGetProcessedBody
  - IBody2.IGetProcessedBodyWithSelFace
  - IPartDoc.IGetProcessedBody2
keywords:
  - bodies
  - see
  - also
  - ibody2
  - processed
  - igetprocessedbodywithselface2
  - ipartdoc
  - part
  - doc
  - body
  - sel
  - face2
  - body2
---

# IPartDoc.IGetProcessedBodyWithSelFace2

Gets a processed body.

## Signature

```csharp
Body2 IGetProcessedBodyWithSelFace2()
```
## Parameters

None.

## Return Value

Processed body , which is a copy of the body for this part

## Remarks

This method requires that you preselect a face.

## See Also

- `IBody2.GetProcessedBody2`
- `IBody2.GetProcessedBodyWithSelFace`
- `IBody2.IGetProcessedBody`
- `IBody2.IGetProcessedBodyWithSelFace`
- `IPartDoc.IGetProcessedBody2`