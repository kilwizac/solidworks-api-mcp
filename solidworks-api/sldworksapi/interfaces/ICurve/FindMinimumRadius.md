---
type: method
interface: ICurve
member: FindMinimumRadius
returns: System.Boolean
parameters:
  -
    name: Bound
    type: System.Object
    description: Array of doubles containing the start and end boundaries (see Remarks )
  -
    name: NumOfRadius
    type: System.Int32
    description: Number of radius returned; can be 0 or 1
  -
    name: Radius
    type: System.Object
    description: Minimum radius of curvature (see Remarks )
  -
    name: Location
    type: System.Object
    description: Position where minimum radius curvature occurred (see Remarks )
  -
    name: Parameter
    type: System.Object
    description: Curve parameter (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.GetEndParams
  - ICurve.IFindMinimumRadius
  - ISurface.FindMinimumRadius
  - ISurface.IFindMinimumRadius
keywords:
  - curve
  - see
  - also
  - icurve
  - radius
  - curvature
  - curves
  - findminimumradius
  - find
  - minimum
  - bound
  - object
  - num
  - int32
  - location
  - parameter
  - boolean
  - vba
---

# ICurve.FindMinimumRadius

Finds the minimum radius of curvature of the selected curve and its position and u-v parameters.

## Signature

```csharp
System.Boolean FindMinimumRadius( 
   System.Object
Bound
,
   out System.Int32
NumOfRadius
,
   out System.Object
Radius
,
   out System.Object
Location
,
   out System.Object
Parameter
)
```
## Parameters

- `Bound` (System.Object): Array of doubles containing the start and end boundaries (see Remarks )
- `NumOfRadius` (System.Int32): Number of radius returned; can be 0 or 1
- `Radius` (System.Object): Minimum radius of curvature (see Remarks )
- `Location` (System.Object): Position where minimum radius curvature occurred (see Remarks )
- `Parameter` (System.Object): Curve parameter (see Remarks )

## Return Value

True if operation succeeds, false if it fails

## Remarks

The search is confined to the portion of the selected curve lying inside of Bound.
COM returns these data types for these parameters:
Radius: VARIANT of SafeDoubleArray
Location: VARIANT of SafeDispatchArray of
IMathpoint
Parameter: VARIANT of SafeDoubleArray

## Examples

- Find Minimum Radius of Curve (VBA) (Find_Minimum_Radius_of_Curve_Example_VB.htm)

## See Also

- `ICurve.GetEndParams`
- `ICurve.IFindMinimumRadius`
- `ISurface.FindMinimumRadius`
- `ISurface.IFindMinimumRadius`