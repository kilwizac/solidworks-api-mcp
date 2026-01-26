---
type: method
interface: IDrawingDoc
member: ReplaceViewModel
returns: System.Boolean
parameters:
  -
    name: NewModelPathName
    type: System.String
    description: Full path and filename of the replacement model
  -
    name: Views
    type: System.Object
    description: Array of IView s in which to replace the model
  -
    name: Instances
    type: System.Object
    description: Array of IComponent2 s that are specific instances of the model to replace in the drawing
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.InsertModelInPredefinedView
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - models
  - replaceviewmodel
  - idrawingdoc
  - doc
  - replace
  - view
  - model
  - new
  - path
  - name
  - string
  - object
  - instances
  - boolean
  - vb
  - net
  - vba
---

# IDrawingDoc.ReplaceViewModel

Replaces the specified instances of a model in the specified drawing views.

## Signature

```csharp
System.Boolean ReplaceViewModel( 
   System.String
NewModelPathName
,
   System.Object
Views
,
   System.Object
Instances
)
```
## Parameters

- `NewModelPathName` (System.String): Full path and filename of the replacement model
- `Views` (System.Object): Array of IView s in which to replace the model
- `Instances` (System.Object): Array of IComponent2 s that are specific instances of the model to replace in the drawing

## Return Value

True if the model is replaced, false if not

## Remarks

This method corresponds to
Tools > Replace Model
.

## Examples

- Replace View Model (C#) (Replace_View_Model_Example_CSharp.htm)
- Replace View Model (VB.NET) (Replace_View_Model_Example_VBNET.htm)
- Replace View Model (VBA) (Replace_View_Model_Example_VB.htm)

## See Also

- `IDrawingDoc.InsertModelInPredefinedView`