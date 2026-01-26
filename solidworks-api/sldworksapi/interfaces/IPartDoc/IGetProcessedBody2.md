---
type: method
interface: IPartDoc
member: IGetProcessedBody2
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
  - IPartDoc.IGetProcessedBodyWithSelFace2
keywords:
  - bodies
  - see
  - also
  - ibody2
  - processed
  - igetprocessedbody2
  - ipartdoc
  - part
  - doc
  - body2
---

# IPartDoc.IGetProcessedBody2

Pre-processes the geometry of a body so that:

## Signature

```csharp
Body2 IGetProcessedBody2()
```
## Parameters

None.

## Return Value

Processed body , which is a copy of the body for this part

## Remarks

Preprocessing is sometimes necessary (for example, IGES files), for exporting to systems that have difficulty with periodic conditions.

## See Also

- `IBody2.GetProcessedBody2`
- `IBody2.GetProcessedBodyWithSelFace`
- `IBody2.IGetProcessedBody`
- `IBody2.IGetProcessedBodyWithSelFace`
- `IPartDoc.IGetProcessedBodyWithSelFace2`