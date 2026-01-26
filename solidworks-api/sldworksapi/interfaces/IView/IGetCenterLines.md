---
type: method
interface: IView
member: IGetCenterLines
returns: Centerline
parameters:
  -
    name: NumCenterLine
    type: System.Int32
    description: Total number of centerlines on this drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetCenterLines
keywords:
  - centerlines
  - see
  - also
  - icenterline
  - annotations
  - annotation
  - iannotation
  - view
  - iview
  - igetcenterlines
  - center
  - lines
  - num
  - line
  - int32
  - centerline
---

# IView.IGetCenterLines

Gets all of the centerlines on this drawing view.

## Signature

```csharp
Centerline IGetCenterLines( 
   System.Int32
NumCenterLine
)
```
## Parameters

- `NumCenterLine` (System.Int32): Total number of centerlines on this drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of centerlines VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of centerlines all at once instead of calling
IView::GetFirstCenterLine
and then repeatedly calling
ICenterLine::GetNext
to obtain the remaining centerlines on the drawing view.
Before calling this method, call
IView::GetCenterLineCount
to get the value for numCenterLine.

## See Also

- `IView.GetCenterLines`