---
type: method
interface: IModelDocExtension
member: UpdateSunLight
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetSunLightAdvancedPropertyValues
  - IModelDocExtension.SunLightInformation
keywords:
  - lighting
  - advanced
  - properties
  - updatesunlight
  - imodeldocextension
  - model
  - doc
  - extension
  - update
  - sun
  - light
  - boolean
---

# IModelDocExtension.UpdateSunLight

Updates sunlight position, color, and background image.

## Signature

```csharp
System.Boolean UpdateSunLight()
```
## Parameters

None.

## Return Value

True if the update is successful, false if not

## Remarks

Before calling this method, call
IModelDocExtension::SetSunLightAdvancedPropertyValues
to set sunlight advanced properties.

## See Also

- `IModelDocExtension.GetSunLightAdvancedPropertyValues`
- `IModelDocExtension.SunLightInformation`