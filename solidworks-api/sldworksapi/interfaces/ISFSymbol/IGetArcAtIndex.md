---
type: method
interface: ISFSymbol
member: IGetArcAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the arc where the index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ISFSymbol.GetArcAtIndex
keywords:
  - igetarcatindex
  - isfsymbol
  - isf
  - symbol
  - arc
  - index
  - int32
  - double
---

# ISFSymbol.IGetArcAtIndex

Gets information for the specified arc.

## Signature

```csharp
System.Double IGetArcAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the arc where the index begins at 0

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISFSymbol::GetArcCount
before calling this method to get the number of arcs in this surface finish symbol.
The return value is the following array of doubles :
[
lineType
,
startPt
[3],
endPt
[3],
centerPt
[3],
rotationDir
]
where:
lineType
= Line type as defined in
swLineTypes_e
enumeration
startPt
[3]
= XYZ arc start point
endPt
[3]
= XYZ arc end point
centerPt
[3]
= XYZ arc center point
rotationDir
=
Value is a boolean returned as a double and represents the rotation direction, where CCW = True and CW = FALS

## See Also

- `ISFSymbol.GetArcAtIndex`