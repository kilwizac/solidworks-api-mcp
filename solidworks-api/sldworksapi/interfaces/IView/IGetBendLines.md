---
type: method
interface: IView
member: IGetBendLines
returns: SketchSegment
parameters:
  -
    name: NumberOfBendLine
    type: System.Int32
    description: Number of bendlines in a flat-pattern drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - ISketchSegment.IsBendLine
  - IView.GetBendLines
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - bendlines
  - bends
  - lines
  - view
  - iview
  - igetbendlines
  - bend
  - number
  - line
  - int32
  - sketch
  - segment
---

# IView.IGetBendLines

Gets the bendlines in a flat-pattern drawing view.

## Signature

```csharp
SketchSegment IGetBendLines( 
   System.Int32
NumberOfBendLine
)
```
## Parameters

- `NumberOfBendLine` (System.Int32): Number of bendlines in a flat-pattern drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of bendlines in a flat-pattern view VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IView::GetBendLineCount
to get NumberOfBendLine.

## See Also

- `ISketchSegment.IsBendLine`
- `IView.GetBendLines`