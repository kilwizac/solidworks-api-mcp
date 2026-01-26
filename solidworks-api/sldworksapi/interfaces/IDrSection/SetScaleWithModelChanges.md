---
type: method
interface: IDrSection
member: SetScaleWithModelChanges
returns: void
parameters:
  -
    name: ScaleWithChanges
    type: System.Boolean
    description: True scales the section line with changes to the model, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.GetScaleWithModelChanges
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - lines
  - scale
  - setscalewithmodelchanges
  - dr
  - model
  - changes
  - boolean
  - void
  - create
  - view
  - some
  - data
  - vb
  - net
  - vba
---

# IDrSection.SetScaleWithModelChanges

Sets whether the section line scales with changes to the model.

## Signature

```csharp
void SetScaleWithModelChanges( 
   System.Boolean
ScaleWithChanges
)
```
## Parameters

- `ScaleWithChanges` (System.Boolean): True scales the section line with changes to the model, false does not

## Return Value

Unknown.

## Examples

- Create Section View and Get Some Data (C#) (Create_Section_View_and_Get_Some_Data_Example_CSharp.htm)
- Create Section View and Get Some Data (VB.NET) (Create_Section_View_and_Get_Some_Data_Example_VBNET.htm)
- Create Section View and Get Some Data (VBA) (Create_Section_View_and_Get_Some_Data_Example_VB.htm)

## See Also

- `IDrSection.GetScaleWithModelChanges`