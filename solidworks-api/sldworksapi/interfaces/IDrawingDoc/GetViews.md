---
type: method
interface: IDrawingDoc
member: GetViews
returns: System.Object
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
  - IDrawingDoc.GetViewCount
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
  - getviews
  - drawing
  - doc
  - object
  - notes
  - vba
---

# IDrawingDoc.GetViews

Gets the all of the views, including the sheets, in this drawing document.

## Signature

```csharp
System.Object GetViews()
```
## Parameters

None.

## Return Value

An array of arrays (see Remarks )

## Remarks

The return value is an array of arrays with a length equal to the number of sheets in the drawing document. Each of those arrays is a list of views with the first view in the list being the sheet itself.
If there are multiple sheets in the drawing document, then the order in which the sheets are returned is undetermined. So, the active sheet and its views might not be returned in the first array.
For example, when there are three sheets in the drawing document:
One sheet contains 6 views, so first array has this number of elements
= 7 (sheet + 6 views)
Another sheet contains 2 views, so second array has this number of elements
= 3 (sheet + 2 views)
Another sheet contains no views, so third array has this number of elements
= 1 (sheet + 0 views)

## Examples

- Get Views and Notes (VBA) (Get_Views_and_Notes_Example_VB.htm)

## See Also

- `IDrawingDoc.GetFirstView`
- `IDrawingDoc.GetViewCount`
- `IDrawingDoc.IGetFirstView`
- `ISheet.GetViews`
- `IView.GetNextView`
- `IView.IGetNextView`