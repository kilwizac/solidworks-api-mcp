---
type: method
interface: ITriadManipulator
member: UpdateScale
returns: void
parameters:
  -
    name: Scale
    type: System.Double
    description: Scale
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ITriadManipulator.DoNotShow
keywords:
  - updatescale
  - itriadmanipulator
  - triad
  - manipulator
  - update
  - scale
  - double
  - void
---

# ITriadManipulator.UpdateScale

Sets scale for the triad manipulator's x,y,z axes.

## Signature

```csharp
void UpdateScale( 
   System.Double
Scale
)
```
## Parameters

- `Scale` (System.Double): Scale

## Return Value

Unknown.

## Remarks

The initial length of an axis is 40 pixels, and the length is unrestricted. Each axis is the same length.

## See Also

- `ITriadManipulator.DoNotShow`