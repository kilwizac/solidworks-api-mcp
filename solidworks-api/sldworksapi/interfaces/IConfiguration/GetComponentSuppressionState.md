---
type: method
interface: IConfiguration
member: GetComponentSuppressionState
returns: System.Boolean
parameters:
  -
    name: CompName
    type: System.String
    description: Component name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - components
  - see
  - also
  - icomponent2
  - suppress
  - getcomponentsuppressionstate
  - iconfiguration
  - configuration
  - component
  - suppression
  - state
  - comp
  - name
  - string
  - boolean
  - whether
  - are
  - loaded
  - laoded
  - vb
  - net
  - vba
---

# IConfiguration.GetComponentSuppressionState

Gets the suppression state of the specified component in this configuration.

## Signature

```csharp
System.Boolean GetComponentSuppressionState( 
   System.String
CompName
)
```
## Parameters

- `CompName` (System.String): Component name

## Return Value

True if the configuration is suppressed, false if not

## Remarks

SOLIDWORKS 2001Plus SP1, Revision Number 10.1

## Examples

- Get Whether Components Are Loaded (C#) (Get_Whether_Components_Are_Loaded_Example_CSharp.htm)
- Get Whether Components Are Laoded (VB.NET) (Get_Whether_Components_Are_Loaded_Example_VBNET.htm)
- Get Whether Components Are Loaded (VBA) (Get_Whether_Components_Are_Loaded_Example_VB.htm)