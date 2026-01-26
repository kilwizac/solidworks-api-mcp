---
type: method
interface: IModelDoc2
member: GetFirstModelView
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ActiveView
  - IModelDoc2.GetModelViewCount
  - IModelDoc2.GetModelViewNames
  - IModelDoc2.IActiveView
  - IModelDoc2.IGetFirstModelView
  - IModelDoc2.IGetModelViewNames
  - IModelDoc2.ModelViewManager
  - IModelDocExtension.GetModelViewCount
  - IModelDocExtension.GetModelViews
  - IModelDocExtension.IGetModelViews
keywords:
  - model
  - views
  - see
  - also
  - imodelview
  - imodelviewmanager
  - interfaces
  - first
  - getfirstmodelview
  - imodeldoc2
  - doc2
  - view
  - object
  - run
  - solidworks
  - commands
  - synthesize
  - mouse
  - events
  - vb
  - net
  - vba
---

# IModelDoc2.GetFirstModelView

Gets the first view in a model document.

## Signature

```csharp
System.Object GetFirstModelView()
```
## Parameters

None.

## Return Value

First model view in this document

## Remarks

You can traverse through the model views in a document by using this method to get the initial view and
IModelView::GetNext
to get each of subsequent views. You have reached the end of the list when IModelView::GetNext returns Nothing or null.
See
IModelDoc2::EnumModelViews
for traversing the model views on a document.

## Examples

- Run SOLIDWORKS Commands and Synthesize Mouse Events (C#) (Run_SolidWorks_Commands_and_Synthesize_Mouse_Events_Example_CSharp.htm)
- Run SOLIDWORKS Commands and Synthesize Mouse Events (VB.NET) (Run_SolidWorks_Commands_and_Synthesize_Mouse_Events_Example_VBNET.htm)
- Run SOLIDWORKS Commands and Synthesize Mouse Events (VBA) (Run_SOLIDWORKS_Commands_and_Synthesize_Mouse_Events_Example_VB.htm)

## See Also

- `IModelDoc2.ActiveView`
- `IModelDoc2.GetModelViewCount`
- `IModelDoc2.GetModelViewNames`
- `IModelDoc2.IActiveView`
- `IModelDoc2.IGetFirstModelView`
- `IModelDoc2.IGetModelViewNames`
- `IModelDoc2.ModelViewManager`
- `IModelDocExtension.GetModelViewCount`
- `IModelDocExtension.GetModelViews`
- `IModelDocExtension.IGetModelViews`