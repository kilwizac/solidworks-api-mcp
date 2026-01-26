---
type: property
interface: IPlaneManipulator
member: Normal
returns: MathVector
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - normal
  - iplanemanipulator
  - plane
  - manipulator
  - math
  - vector
readonly: null
---

# IPlaneManipulator.Normal

Gets or sets the normal-to vector for a plane that has a manipulator.

## Signature

```csharp
MathVector Normal {get; set;}
```
## Parameters

None.

## Return Value

Normal-to vector

## Remarks

If a plane with a manipulator is already displayed, then do not set a new normal-to vector or
origin
for that plane.