---
type: method
interface: IDrSection
member: SetPartialSection
returns: void
parameters:
  -
    name: Partial
    type: System.Boolean
    description: True sets a partial section cut, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - parts
related:
  - IDrSection.GetPartialSection
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - cuts
  - setpartialsection
  - dr
  - partial
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

# IDrSection.SetPartialSection

Sets whether this is a partial section cut.

## Signature

```csharp
void SetPartialSection( 
   System.Boolean
Partial
)
```
## Parameters

- `Partial` (System.Boolean): True sets a partial section cut, false does not

## Return Value

Unknown.

## Examples

- Create Section View and Get Some Data (C#) (Create_Section_View_and_Get_Some_Data_Example_CSharp.htm)
- Create Section View and Get Some Data (VB.NET) (Create_Section_View_and_Get_Some_Data_Example_VBNET.htm)
- Create Section View and Get Some Data (VBA) (Create_Section_View_and_Get_Some_Data_Example_VB.htm)

## See Also

- `IDrSection.GetPartialSection`