---
type: method
interface: IComponent2
member: GetSectionedBodies
returns: System.Object
parameters:
  -
    name: ViewIn
    type: System.Object
    description: Model view displaying the sectioned view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - getsectionedbodies
  - icomponent2
  - component2
  - sectioned
  - bodies
  - view
  - object
  - vba
---

# IComponent2.GetSectionedBodies

Gets the sectioned bodies in the specified section view.

## Signature

```csharp
System.Object GetSectionedBodies( 
   System.Object
ViewIn
)
```
## Parameters

- `ViewIn` (System.Object): Model view displaying the sectioned view

## Return Value

Array of the sectioned bodies in the specified view

## Remarks

To determine if the model view you want is currently displaying a sectioned view, use
IModelView::GetDisplayState
.
If you need the full body representation, use
IComponent2::GetBody
,
IPartDoc::GetBodies2
, or
IPartDoc::EnumBodies3
, which ignore the sectioning operation.
For COM implementations, see
IComponent2::EnumSectionedBodies
.
If a component is suppressed or lightweight, this method returns NULL because the component is not loaded into memory by SOLIDWORKS. For more information on lightweight components, see
Work With Lightweight Components
.

## Examples

- Get Sectioned Bodies (VBA) (Get_Sectioned_Bodies_Example_VB.htm)