---
type: method
interface: IBreakLine
member: SetPosition
returns: System.Boolean
parameters:
  -
    name: Position1
    type: System.Double
    description: Location of the first break line
  -
    name: Position2
    type: System.Double
    description: Location of the second break line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IBreakLine.GetPosition
keywords:
  - setposition
  - ibreakline
  - break
  - line
  - position
  - position1
  - double
  - position2
  - boolean
  - create
  - view
  - vba
  - vb
  - net
---

# IBreakLine.SetPosition

Sets the locations of the break lines in the drawing view.

## Signature

```csharp
System.Boolean SetPosition( 
   System.Double
Position1
,
   System.Double
Position2
)
```
## Parameters

- `Position1` (System.Double): Location of the first break line
- `Position2` (System.Double): Location of the second break line

## Return Value

True if the break lines are positioned, false if not

## Remarks

Call
IModelDoc2::EditRebuild3
after calling this method.

## Examples

- Create Break View (VBA) (Create_Broken_View_Example_VB.htm)
- Create Break View (VB.NET) (Create_Broken_View_Example_VBNET.htm)
- Create Break View (C#) (Create_Broken_View_Example_CSharp.htm)

## See Also

- `IBreakLine.GetPosition`