---
type: property
interface: IModelDoc2
member: ActiveView
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
  - IModelDoc2.EnumModelViews
  - IModelDoc2.GetFirstModelView
  - IModelDoc2.IActiveView
  - IModelDoc2.IGetFirstModelView
  - IModelView.GetNext
  - IModelView.IGetNext
keywords:
  - model
  - views
  - see
  - also
  - imodelview
  - imodelviewmanager
  - interfaces
  - active
  - view
  - iview
  - activeview
  - imodeldoc2
  - doc2
  - object
  - change
  - wrap
  - feature
  - vba
  - display
  - state
  - create
  - hidden
  - undo
  - vb
  - net
  - names
  - components
  - window
  - handles
  - dibsections
readonly: null
---

# IModelDoc2.ActiveView

Gets the current active model view in read-only mode.

## Signature

```csharp
System.Object ActiveView {get; set;}
```
## Parameters

None.

## Return Value

Current active model view in this document

## Examples

- Change Wrap Feature (VBA) (Change_Wrap_Feature_Face_Example_VB.htm)
- Get Display State (VBA) (Get_Display_State_Example_VB.htm)
- Set Model Display (VBA) (Set_Model_Display_Mode_Example_VB.htm)
- Create Hidden Undo Object (VBA) (Create_Multiple_Undo_Command_Example_VB.htm)
- Create Hidden Undo Object (VB.NET) (Create_Multiple_Undo_Command_Example_VBNET.htm)
- Create Hidden Undo Object (C#) (Create_Multiple_Undo_Command_Example_CSharp.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (C#) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_CSharp.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VB.NET) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VBNET.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VBA) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VB.htm)

## See Also

- `IModelDoc2.EnumModelViews`
- `IModelDoc2.GetFirstModelView`
- `IModelDoc2.IActiveView`
- `IModelDoc2.IGetFirstModelView`
- `IModelView.GetNext`
- `IModelView.IGetNext`