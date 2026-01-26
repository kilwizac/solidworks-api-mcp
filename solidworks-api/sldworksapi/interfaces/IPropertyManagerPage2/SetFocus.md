---
type: method
interface: IPropertyManagerPage2
member: SetFocus
returns: System.Boolean
parameters:
  -
    name: ID
    type: System.Int32
    description: User-defined ID of the control where to set focus
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPage2.GetFocus
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - focus
  - setfocus
  - manager
  - page2
  - id
  - int32
  - boolean
  - control
  - vb
  - net
  - vba
---

# IPropertyManagerPage2.SetFocus

Sets focus on the specified control on this PropertyManager page.

## Signature

```csharp
System.Boolean SetFocus( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): User-defined ID of the control where to set focus

## Return Value

True if focus is set on the control, false if not

## Examples

- Set Focus on PropertyManager Page Control (C#) (Set_Focus_on_PropertyManager_Page_Control_Example_CSharp.htm)
- Set Focus on PropertyManager Page Control (VB.NET) (Set_Focus_on_PropertyManager_Page_Control_Example_VBNET.htm)
- Set Focus on PropertyManager Page Control (VBA) (Set_Focus_on_PropertyManager_Page_Control_Example_VB.htm)

## See Also

- `IPropertyManagerPage2.GetFocus`