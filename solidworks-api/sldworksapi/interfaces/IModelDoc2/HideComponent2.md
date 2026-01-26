---
type: method
interface: IModelDoc2
member: HideComponent2
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.IsActive
  - IModelDoc2.ShowComponent2
keywords:
  - components
  - see
  - also
  - icomponent2
  - hide
  - drawings
  - hidecomponent2
  - imodeldoc2
  - model
  - doc2
  - component2
  - void
  - undo
  - hidden
  - component
  - fire
  - post
  - notify
  - vb60
  - vb
  - net
---

# IModelDoc2.HideComponent2

Hides the selected component.

## Signature

```csharp
void HideComponent2()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method is only available for
IDrawingDoc
and
IAssemblyDoc
objects; it is not available for
IPartDoc
objects.
To show a selected component, call
IModelDoc2::ShowComponent2
.

## Examples

- Undo Hidden Component and Fire Post-Notify Event (VB60 (Undo_Hidden_Component_and_Fire_Undo_Post-Notify_Event_Example_VB.htm)
- Undo Hidden Component and Fire Post-Notify Event (VB.NET) (Undo_Hidden_Component_and_Fire_Undo_Post-Notify_Event_Example_VBNET.htm)
- Undo Hidden Component and Fire Post-Notify Event (C#) (Undo_Hidden_Component_and_Fire_Undo_Post-Notify_Event_Example_CSharp.htm)

## See Also

- `IModelDoc2.IsActive`
- `IModelDoc2.ShowComponent2`