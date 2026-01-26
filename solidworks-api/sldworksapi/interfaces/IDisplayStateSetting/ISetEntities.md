---
type: method
interface: IDisplayStateSetting
member: ISetEntities
returns: void
parameters:
  -
    name: EntityCount
    type: System.Int32
    description: Number of entities in the Entities array
  -
    name: Entities
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of entities VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDisplayStateSetting.Entities
  - IDisplayStateSetting.IGetEntities
keywords:
  - isetentities
  - idisplaystatesetting
  - display
  - state
  - setting
  - entities
  - entity
  - count
  - int32
  - object
  - void
---

# IDisplayStateSetting.ISetEntities

Sets the entities for this display state setting.

## Signature

```csharp
void ISetEntities( 
   System.Int32
EntityCount
,
   ref System.Object
Entities
)
```
## Parameters

- `EntityCount` (System.Int32): Number of entities in the Entities array
- `Entities` (System.Object): in-process, unmanaged C++: Pointer to an array of entities VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

After calling this method:
Call
IDisplayStateSetting::ISetNames
to specify the display states.
Call
IDisplayStateSetting::Option
to specify the display state scope of the setting.
Get or set one or more of the following properties for the specified display states, components, and scope:
IModelDocExtension::DisplayMode
IModelDocExtension::Transparency
IModelDocExtension::Visibility
Call
IModelDocExtension::GetAppearanceSetting
to obtain an
IAppearanceSetting
object.
Set the properties in the IAppearanceSetting object.
Get or set the material properties for the specified display states, components, and scope:
IModelDocExtension::DisplayStateSpecMaterialPropertyValues

## See Also

- `IDisplayStateSetting.Entities`
- `IDisplayStateSetting.IGetEntities`