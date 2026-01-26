---
type: property
interface: IMagneticLine
member: EqualSpacing
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IMagneticLine.Angle
  - IMagneticLine.EndPoint
  - IMagneticLine.Length
  - IMagneticLine.StartPoint
keywords:
  - equalspacing
  - imagneticline
  - magnetic
  - line
  - equal
  - spacing
  - boolean
  - insert
  - vba
  - vb
  - net
readonly: null
---

# IMagneticLine.EqualSpacing

Gets and sets whether to equally space the notes on this magnetic line.

## Signature

```csharp
System.Boolean EqualSpacing {get; set;}
```
## Parameters

None.

## Return Value

True to equally space the notes, false to drag the notes to any location on the magnetic line (see Remarks )

## Remarks

If this property is set to true, then
IMagneticLine::AddNote
ignores any Position parameter value.

## Examples

- Insert Magnetic Line (VBA) (Insert_Magnetic_Line_Example_VB.htm)
- Insert Magnetic Line (VB.NET) (Insert_Magnetic_Line_Example_VBNET.htm)
- Insert Magnetic Line (C#) (Insert_Magnetic_Line_Example_CSharp.htm)

## See Also

- `IMagneticLine.Angle`
- `IMagneticLine.EndPoint`
- `IMagneticLine.Length`
- `IMagneticLine.StartPoint`