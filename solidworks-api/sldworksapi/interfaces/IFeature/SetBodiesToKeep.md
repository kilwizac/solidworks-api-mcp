---
type: method
interface: IFeature
member: SetBodiesToKeep
returns: void
parameters:
  -
    name: AllBodies
    type: System.Boolean
    description: True to keep all bodies, false to not
  -
    name: BodiesToKeep
    type: System.Object
    description: Array of bodies to keep
  -
    name: ConfigOption
    type: System.Int32
    description: Configuration options as defined in swInConfigurationOpts_e
  -
    name: ConfigNames
    type: System.Object
    description: Array of configuration names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - DAssemblyDocEvents_PromptBodiesToKeepNotifyEventHandler
  - DPartDocEvents_PromptBodiesToKeepNotifyEventHandler
keywords:
  - feature
  - see
  - also
  - ifeature
  - cut
  - bodies
  - ibody2
  - keep
  - multiple
  - multibody
  - setbodiestokeep
  - all
  - boolean
  - object
  - config
  - option
  - int32
  - names
  - void
  - body
  - vb
  - net
  - vba
---

# IFeature.SetBodiesToKeep

Set the bodies to keep and their configurations for features that create multiple bodies in parts and assemblies.

## Signature

```csharp
void SetBodiesToKeep( 
   System.Boolean
AllBodies
,
   System.Object
BodiesToKeep
,
   System.Int32
ConfigOption
,
   System.Object
ConfigNames
)
```
## Parameters

- `AllBodies` (System.Boolean): True to keep all bodies, false to not
- `BodiesToKeep` (System.Object): Array of bodies to keep
- `ConfigOption` (System.Int32): Configuration options as defined in swInConfigurationOpts_e
- `ConfigNames` (System.Object): Array of configuration names

## Return Value

Unknown.

## Examples

- Cut Body and Keep All Bodies (C#) (Cut_Body_and_Keep_All_Bodies_Example_CSharp.htm)
- Cut Body and Keep All Bodies (VB.NET) (Cut_Body_and_Keep_All_Bodies_Example_VBNET.htm)
- Cut Body and Keep All Bodies (VBA) (Cut_Body_and_Keep_All_Bodies_Example_VB.htm)

## See Also

- `DAssemblyDocEvents_PromptBodiesToKeepNotifyEventHandler`
- `DPartDocEvents_PromptBodiesToKeepNotifyEventHandler`