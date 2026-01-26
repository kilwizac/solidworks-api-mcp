---
type: method
interface: IModelDoc2
member: GetUserPreferenceToggle
returns: System.Boolean
parameters:
  -
    name: UserPreferenceToggle
    type: System.Int32
    description: Value as defined in swUserPreferenceToggle_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - getuserpreferencetoggle
  - imodeldoc2
  - model
  - doc2
  - user
  - preference
  - toggle
  - int32
  - boolean
  - material
  - properties
  - vba
  - ignore
  - feature
  - colors
---

# IModelDoc2.GetUserPreferenceToggle

Obsolete. Superseded by IModelDocExtension::GetUserPreferenceToggle.

## Signature

```csharp
System.Boolean GetUserPreferenceToggle( 
   System.Int32
UserPreferenceToggle
)
```
## Parameters

- `UserPreferenceToggle` (System.Int32): Value as defined in swUserPreferenceToggle_e

## Return Value

True if the item specified by UserPreferenceToggle is currently toggled on, false if the item is currently toggled off

## Remarks

This method is equivalent to interactively getting document properties in the SOLIDWORKS Design software.
The value returned is true if the item is currently turned on, and false if the item is currently turned off. For example:
boolean curState = m_ModelDoc2.GetUserPreferenceToggle( swIgnoreFeatureColors )
See
System Options and Document Properties
for details.

## Examples

- Get Material Properties (VBA) (Get_Material_Properties_Example_VB.htm)
- Ignore Feature Colors (VBA) (Ignore_Feature_Colors_Example_VB.htm)