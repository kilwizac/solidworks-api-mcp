---
type: method
interface: ICamera
member: GetViewVector
returns: MathVector
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - ICamera.GetUpVector
keywords:
  - getviewvector
  - icamera
  - camera
  - view
  - vector
  - math
---

# ICamera.GetViewVector

Gets the direction in which the camera is looking.

## Signature

```csharp
MathVector GetViewVector()
```
## Parameters

None.

## Return Value

Pointer to IMathVector object

## Remarks

Most of the time, the return value is the vector from the camera position to the target, normalized.

## See Also

- `ICamera.GetUpVector`