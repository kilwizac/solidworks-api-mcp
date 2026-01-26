---
type: property
interface: IPropertyManagerPageTab
member: Activate
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - activate
  - ipropertymanagerpagetab
  - manager
  - page
  - tab
  - boolean
  - propertymanager
  - vba
  - vb
  - net
readonly: null
---

# IPropertyManagerPageTab.Activate

Activates this tab in the PropertyManager page.

## Signature

```csharp
System.Boolean Activate()
```
## Parameters

None.

## Return Value

True if successful, false if not

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.

## Examples

- Activate PropertyManager Page Tab (VBA) (Activate_Property_Manager_Page_Tab_Example_VB.htm)
- Activate PropertyManager Page Tab (VB.NET) (Activate_Property_Manager_Page_Tab_Example_VBNET.htm)
- Activate PropertyManager Page Tab (C#) (Activate_Property_Manager_Page_Tab_Example_CSharp.htm)