---
type: method
interface: IComponent2
member: EnumSectionedBodies
returns: EnumBodies2
parameters:
  -
    name: ViewIn
    type: ModelView
    description: Pointer to the model view displaying the sectioned view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - enumeration
  - enumerations
  - enumsectionedbodies
  - icomponent2
  - component2
  - sectioned
  - view
  - model
  - bodies2
---

# IComponent2.EnumSectionedBodies

Gets the sectioned bodies seen in the specified view and returns them in an enumerated list.

## Signature

```csharp
EnumBodies2 EnumSectionedBodies( 
   ModelView
ViewIn
)
```
## Parameters

- `ViewIn` (ModelView): Pointer to the model view displaying the sectioned view

## Return Value

Pointer to the enumerated list of bodies

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
For Dispatch implementations, see
IComponent2::GetSectionedBodies
.
If a component is suppressed or lightweight, this method returns NULL because the component is not loaded into memory by SOLIDWORKS. For more information on lightweight components, see
Work With Lightweight Components
.