---
type: method
interface: IAssemblyDoc
member: CompConfigProperties6
returns: System.Boolean
parameters:
  -
    name: Suppression
    type: System.Int32
    description: Suppression state of the selected component as defined in swComponentSuppressionState_e
  -
    name: Solving
    type: System.Int32
    description: Solving state of the selected component as defined in swComponentSolvingOption_e
  -
    name: Visibility
    type: System.Boolean
    description: True if you want to show the selected component in the graphics area, false if not
  -
    name: UseNamedRefConfig
    type: System.Boolean
    description: Not used
  -
    name: RefConfigName
    type: System.String
    description: If a non-empty string is specified, then the referenced configuration of the selected component is changed to this named configuration If an empty string is specified, then the default referenced configuration is used
  -
    name: ExcludeFromBOM
    type: System.Boolean
    description: True to exclude the configuration from the BOM, false to not
  -
    name: IsEnvelope
    type: System.Boolean
    description: True if the selected component is an envelope, false if not
  -
    name: SaveAssemblyAsPartOption
    type: System.Int32
    description: Option for the selected component when saving this assembly as a part as defined in swASMSLDPRTCompPref_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IComponent2.ExcludeFromBOM
  - IComponent2.IsEnvelope
  - IComponent2.ReferencedConfiguration
  - IComponent2.SetSuppression2
  - IComponent2.Solving
  - IComponent2.Visible
keywords:
  - components
  - see
  - also
  - icomponent2
  - properties
  - rigid
  - sub
  - assemblies
  - compconfigproperties6
  - iassemblydoc
  - assembly
  - doc
  - comp
  - config
  - properties6
  - suppression
  - int32
  - solving
  - visibility
  - boolean
  - use
  - named
  - ref
  - name
  - string
  - exclude
  - bom
  - envelope
  - save
  - part
  - option
  - change
  - component
  - vba
  - vb
  - net
---

# IAssemblyDoc.CompConfigProperties6

Sets the properties for the selected component in the specified configuration.

## Signature

```csharp
System.Boolean CompConfigProperties6( 
   System.Int32
Suppression
,
   System.Int32
Solving
,
   System.Boolean
Visibility
,
   System.Boolean
UseNamedRefConfig
,
   System.String
RefConfigName
,
   System.Boolean
ExcludeFromBOM
,
   System.Boolean
IsEnvelope
,
   System.Int32
SaveAssemblyAsPartOption
)
```
## Parameters

- `Suppression` (System.Int32): Suppression state of the selected component as defined in swComponentSuppressionState_e
- `Solving` (System.Int32): Solving state of the selected component as defined in swComponentSolvingOption_e
- `Visibility` (System.Boolean): True if you want to show the selected component in the graphics area, false if not
- `UseNamedRefConfig` (System.Boolean): Not used
- `RefConfigName` (System.String): If a non-empty string is specified, then the referenced configuration of the selected component is changed to this named configuration If an empty string is specified, then the default referenced configuration is used
- `ExcludeFromBOM` (System.Boolean): True to exclude the configuration from the BOM, false to not
- `IsEnvelope` (System.Boolean): True if the selected component is an envelope, false if not
- `SaveAssemblyAsPartOption` (System.Int32): Option for the selected component when saving this assembly as a part as defined in swASMSLDPRTCompPref_e

## Return Value

True if setting the properties of the selected component in the specified configuration is successful, false if not

## Remarks

You can use configurations to save certain display characteristics with each of the assembly components and retrieve that configuration in the future. SOLIDWORKS Design applies the settings that you specify with this method to the active configuration.
You cannot set the selected component to lightweight using this method.
Known reasons for failure of this method include:
Invalid suppression state specified in Suppression.
Not pre-selecting the component.

## Examples

- Change Component to Envelope (VBA) (Change_Component_to_Envelope_Example_VB.htm)
- Change Component to Envelope (VB.NET) (Change_Component_to_Envelope_Example_VBNET.htm)
- Change Component to Envelope (C#) (Change_Component_to_Envelope_Example_CSharp.htm)

## See Also

- `IComponent2.ExcludeFromBOM`
- `IComponent2.IsEnvelope`
- `IComponent2.ReferencedConfiguration`
- `IComponent2.SetSuppression2`
- `IComponent2.Solving`
- `IComponent2.Visible`