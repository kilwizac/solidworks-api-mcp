---
type: method
interface: IDrSection
member: SetReversedCutDirection
returns: void
parameters:
  -
    name: Reversed
    type: System.Boolean
    description: True reverses the section cut direction from the default, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.GetReversedCutDirection
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - cuts
  - setreversedcutdirection
  - dr
  - reversed
  - cut
  - direction
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

# IDrSection.SetReversedCutDirection

Sets whether the section cut direction is reversed from the default.

## Signature

```csharp
void SetReversedCutDirection( 
   System.Boolean
Reversed
)
```
## Parameters

- `Reversed` (System.Boolean): True reverses the section cut direction from the default, false does not

## Return Value

Unknown.

## Remarks

Call
IModelDoc2::EditRebuild3
after calling this method.

## Examples

- Create Section View and Get Some Data (C#) (Create_Section_View_and_Get_Some_Data_Example_CSharp.htm)
- Create Section View and Get Some Data (VB.NET) (Create_Section_View_and_Get_Some_Data_Example_VBNET.htm)
- Create Section View and Get Some Data (VBA) (Create_Section_View_and_Get_Some_Data_Example_VB.htm)

## See Also

- `IDrSection.GetReversedCutDirection`