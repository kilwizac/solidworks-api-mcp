---
type: method
interface: IAssemblyDoc
member: CompConfigProperties5
returns: System.Boolean
parameters:
  -
    name: Suppression
    type: System.Int32
    description: Suppression state of this component as defined in swComponentSuppressionState_e
  -
    name: Solving
    type: System.Int32
    description: Solving state of this component as defined in swComponentSolvingOption_e
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
    description: True if the component is an envelope, false if not
docset: sldworksapi
deprecated: true
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
  - compconfigproperties5
  - iassemblydoc
  - assembly
  - doc
  - comp
  - config
  - properties5
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
---

# IAssemblyDoc.CompConfigProperties5

Obsolete. Superseded by IAssemblyDoc::CompConfigProperties6.

## Signature

```csharp
System.Boolean CompConfigProperties5( 
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
)
```
## Parameters

- `Suppression` (System.Int32): Suppression state of this component as defined in swComponentSuppressionState_e
- `Solving` (System.Int32): Solving state of this component as defined in swComponentSolvingOption_e
- `Visibility` (System.Boolean): True if you want to show the selected component in the graphics area, false if not
- `UseNamedRefConfig` (System.Boolean): Not used
- `RefConfigName` (System.String): If a non-empty string is specified, then the referenced configuration of the selected component is changed to this named configuration If an empty string is specified, then the default referenced configuration is used
- `ExcludeFromBOM` (System.Boolean): True to exclude the configuration from the BOM, false to not
- `IsEnvelope` (System.Boolean): True if the component is an envelope, false if not

## Return Value

True if setting the properties of the selected component in the specified configuration is successful, false if not

## Remarks

You can use configurations to save certain display characteristics with each of the assembly components and retrieve that configuration in the future. SOLIDWORKS Design applies the settings that you specify with this method to the active configuration.
You cannot set a component to lightweight.
Known reasons for failure of this method include:
Invalid suppression state specified.
Not preselecting a component.

## See Also

- `IComponent2.ExcludeFromBOM`
- `IComponent2.IsEnvelope`
- `IComponent2.ReferencedConfiguration`
- `IComponent2.SetSuppression2`
- `IComponent2.Solving`
- `IComponent2.Visible`