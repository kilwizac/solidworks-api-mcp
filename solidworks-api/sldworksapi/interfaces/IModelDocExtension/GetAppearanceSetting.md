---
type: method
interface: IModelDocExtension
member: GetAppearanceSetting
returns: AppearanceSetting
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - getappearancesetting
  - imodeldocextension
  - model
  - doc
  - extension
  - appearance
  - setting
---

# IModelDocExtension.GetAppearanceSetting

Gets the appearance setting for this document.

## Signature

```csharp
AppearanceSetting GetAppearanceSetting()
```
## Parameters

None.

## Return Value

IAppearanceSetting

## Remarks

After calling this method:
Set the properties in the
IAppearanceSetting
object.
Call
IModelDocExtension::GetDisplayStateSetting
to obtain an
IDisplayStateSetting
object.
Call
IDisplayStateSetting::Names
or
IDisplayStateSetting::ISetNames
to specify the display states.
Call
IDisplayStateSetting::Entities
or
IDisplayStateSetting::ISetEntities
to specify the components.
Call
IDisplayStateSetting::Option
to specify the scope of the display state setting.
Get or set the material properties for the specified display states, components, and scope using
IModelDocExtension::DisplayStateSpecMaterialPropertyValues
.