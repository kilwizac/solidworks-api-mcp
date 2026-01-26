---
type: method
interface: IConfiguration
member: IGetChildren
returns: Configuration
parameters:
  -
    name: NumChildren
    type: System.Int32
    description: Number of children configurations of this configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.GetChildren
  - IConfiguration.GetParent
  - IConfiguration.GetRootComponent3
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - derived
  - configurations
  - children
  - igetchildren
  - num
  - int32
---

# IConfiguration.IGetChildren

Gets all of the children configurations of this derived configuration.

## Signature

```csharp
Configuration IGetChildren( 
   System.Int32
NumChildren
)
```
## Parameters

- `NumChildren` (System.Int32): Number of children configurations of this configuration

## Return Value

in-process, unmanaged C++: Pointer to an array containing the children configurations of this configuration VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

To determine if this configuration is derived, call
IConfiguration::IsDerived
.
Before calling this method, call
IConfiguration::GetChildrenCount
.

## See Also

- `IConfiguration.GetChildren`
- `IConfiguration.GetParent`
- `IConfiguration.GetRootComponent3`