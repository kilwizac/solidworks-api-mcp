---
type: method
interface: IDrSection
member: SetAutoHatch
returns: void
parameters:
  -
    name: AutoHatch
    type: System.Boolean
    description: True enables auto hatching for the section view, false disables it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.GetAutoHatch
  - IDrSection.ScaleHatchPattern
keywords:
  - auto
  - hatching
  - section
  - views
  - see
  - also
  - idrsection
  - setautohatch
  - dr
  - hatch
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

# IDrSection.SetAutoHatch

Sets whether auto hatching is enabled for the section view resulting from this section cut.

## Signature

```csharp
void SetAutoHatch( 
   System.Boolean
AutoHatch
)
```
## Parameters

- `AutoHatch` (System.Boolean): True enables auto hatching for the section view, false disables it

## Return Value

Unknown.

## Remarks

Automatic hatching applies only to assembly section views. For section views of parts, this method has no effect.
When the auto hatching setting is changed, regenerate the section view to see the results of this change in the user interface.

## Examples

- Create Section View and Get Some Data (C#) (Create_Section_View_and_Get_Some_Data_Example_CSharp.htm)
- Create Section View and Get Some Data (VB.NET) (Create_Section_View_and_Get_Some_Data_Example_VBNET.htm)
- Create Section View and Get Some Data (VBA) (Create_Section_View_and_Get_Some_Data_Example_VB.htm)

## See Also

- `IDrSection.GetAutoHatch`
- `IDrSection.ScaleHatchPattern`