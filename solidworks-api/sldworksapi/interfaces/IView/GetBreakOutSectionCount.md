---
type: method
interface: IView
member: GetBreakOutSectionCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetBreakOutSections
keywords:
  - view
  - see
  - also
  - iview
  - broken
  - out
  - sections
  - drawing
  - views
  - getbreakoutsectioncount
  - break
  - section
  - count
  - int32
  - feature
  - data
  - vba
  - vb
  - net
---

# IView.GetBreakOutSectionCount

Gets the number of broken-out sections in this view.

## Signature

```csharp
System.Int32 GetBreakOutSectionCount()
```
## Parameters

None.

## Return Value

Number of broken-out sections

## Remarks

Call this method before calling
IView::IGetBreakOutSections
to determine the size of the array for that method.

## Examples

- Get Broken-Out Section Feature Data (VBA) (Get_Broken_Out_Section_Feature_Data_Example_VB.htm)
- Get Broken-Out Section Feature Data (VB.NET) (Get_Broken_Out_Section_Feature_Data_Example_VBNET.htm)
- Get Broken-Out Section Feature Data (C#) (Get_Broken_Out_Section_Feature_Data_Example_CSharp.htm)

## See Also

- `IView.GetBreakOutSections`