---
type: method
interface: IDrawingDoc
member: GetViewCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.GetFirstView
  - IDrawingDoc.GetViews
  - IDrawingDoc.IGetFirstView
  - ISheet.GetViews
  - IView.GetNextView
  - IView.IGetNextView
keywords:
  - traverse
  - views
  - sheet
  - see
  - also
  - isheet
  - drawings
  - idrawingdoc
  - view
  - iview
  - getviewcount
  - drawing
  - doc
  - count
  - int32
  - notes
  - vba
---

# IDrawingDoc.GetViewCount

Gets all of the number of all of views, including the number of sheets, in this drawing document.

## Signature

```csharp
System.Int32 GetViewCount()
```
## Parameters

None.

## Return Value

Number of views, including the number of sheets, in this drawing document (see Remarks )

## Remarks

For example, when:
Number of sheets in drawing document
=  2
Number of views on Sheet1
=  6
Number of views on Sheet2
=  2
Return value
= 10
The active sheet might not be the first sheet in the return value.

## Examples

- Get Views and Notes (VBA) (Get_Views_and_Notes_Example_VB.htm)

## See Also

- `IDrawingDoc.GetFirstView`
- `IDrawingDoc.GetViews`
- `IDrawingDoc.IGetFirstView`
- `ISheet.GetViews`
- `IView.GetNextView`
- `IView.IGetNextView`