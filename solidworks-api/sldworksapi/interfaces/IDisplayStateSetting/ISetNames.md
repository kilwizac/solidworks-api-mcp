---
type: method
interface: IDisplayStateSetting
member: ISetNames
returns: void
parameters:
  -
    name: DsNameCount
    type: System.Int32
    description: Number of names in the DSNames array
  -
    name: DSNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array display state names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDisplayStateSetting.IGetNames
  - IDisplayStateSetting.Names
keywords:
  - isetnames
  - idisplaystatesetting
  - display
  - state
  - setting
  - names
  - ds
  - name
  - count
  - int32
  - string
  - void
---

# IDisplayStateSetting.ISetNames

Sets the display state names for this display state setting.

## Signature

```csharp
void ISetNames( 
   System.Int32
DsNameCount
,
   ref System.String
DSNames
)
```
## Parameters

- `DsNameCount` (System.Int32): Number of names in the DSNames array
- `DSNames` (System.String): in-process, unmanaged C++: Pointer to an array display state names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

After calling this method:
Call
IDisplayStateSetting::ISetEntities
to specify the entities.
Call
IDisplayStateSetting::Option
to specify the display state scope of the setting.
Get or set one or more of the following properties for the specified display states, entities, and scope:
IModelDocExtension::DisplayMode
IModelDocExtension::Transparency
IModelDocExtension::Visibility
Call
IModelDocExtension::GetAppearanceSetting
to obtain an
IAppearanceSetting
object.
Set the properties in the IAppearanceSetting object.
Get or set the material properties for the specified display states, entities, and scope:
IModelDocExtension::DisplayStateSpecMaterialPropertyValues

## See Also

- `IDisplayStateSetting.IGetNames`
- `IDisplayStateSetting.Names`