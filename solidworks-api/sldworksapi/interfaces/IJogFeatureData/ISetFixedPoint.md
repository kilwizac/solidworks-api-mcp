---
type: method
interface: IJogFeatureData
member: ISetFixedPoint
returns: void
parameters:
  -
    name: Point
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of fixed-point coordinates VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IJogFeatureData.FixedPoint
  - IJogFeatureData.IGetFixedPoint
keywords:
  - isetfixedpoint
  - ijogfeaturedata
  - jog
  - feature
  - data
  - fixed
  - point
  - double
  - void
---

# IJogFeatureData.ISetFixedPoint

Sets the fixed-point x, y, z coordinates for this jog feature.

## Signature

```csharp
void ISetFixedPoint( 
   ref System.Double
Point
)
```
## Parameters

- `Point` (System.Double): in-process, unmanaged C++: Pointer to an array of fixed-point coordinates VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IJogFeatureData.FixedPoint`
- `IJogFeatureData.IGetFixedPoint`