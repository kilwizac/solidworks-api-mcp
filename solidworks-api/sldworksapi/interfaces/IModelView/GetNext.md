---
type: method
interface: IModelView
member: GetNext
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IEnumModelViews.Next
  - IModelDoc2.ActiveView
  - IModelDoc2.GetFirstModelView
  - IModelDoc2.IActiveView
  - IModelDoc2.IGetFirstModelView
  - IModelView.IGetNext
keywords:
  - model
  - views
  - see
  - also
  - imodelview
  - imodelviewmanager
  - interfaces
  - traverse
  - getnext
  - view
  - next
  - object
  - names
  - components
  - window
  - handles
  - dibsections
  - vba
  - vb
  - net
---

# IModelView.GetNext

Gets the next model view after this model view.

## Signature

```csharp
System.Object GetNext()
```
## Parameters

None.

## Return Value

Next model view or Nothing or null if no more model views exist

## Remarks

You can traverse through the model views in a document by using this method. When this method returns Nothing or null, you have reached the end of the list.
See
IModelDoc2::EnumModelViews
for a method for traversing the model views on a document.

## Examples

- Get Names of Components, Window Handles, and DIBSECTIONs (VBA) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VB.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (C#) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_CSharp.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VB.NET) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VBNET.htm)

## See Also

- `IEnumModelViews.Next`
- `IModelDoc2.ActiveView`
- `IModelDoc2.GetFirstModelView`
- `IModelDoc2.IActiveView`
- `IModelDoc2.IGetFirstModelView`
- `IModelView.IGetNext`