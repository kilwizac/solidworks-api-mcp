---
type: method
interface: IComponent2
member: EnumRelatedBodies
returns: EnumBodies2
parameters: []
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
  - enumrelatedbodies
  - icomponent2
  - component2
  - related
  - bodies2
---

# IComponent2.EnumRelatedBodies

Creates an enumerated list of bodies.

## Signature

```csharp
EnumBodies2 EnumRelatedBodies()
```
## Parameters

None.

## Return Value

Pointer to the enumerated list of bodies

## Remarks

The list contains only those bodies associated with reference surfaces. You get a list of bodies that are related to the model, but the list does not include the part body itself.
A reference surface feature might consist of one or more surfaces sewn together. SOLIDWORKS represents each reference surface feature with two bodies: one to represent the front faces and one to represent the back faces. Each IBody2 object has one or more faces depending on whether the reference surface feature is a set of sewn surfaces or a single underlying surface. The corresponding faces for each body pair should have normal vectors that are opposite.
To use the enumerated list, see
IEnumBodies2::Next
,
IEnumBodies2::Skip
,
IEnumBodies2::Reset
, and
IEnumBodies2::Clone
.
If a component is suppressed or lightweight, this method might return NULL because the component has not been loaded into memory by SOLIDWORKS. For more information on lightweight components, see
Work With Lightweight Components
.