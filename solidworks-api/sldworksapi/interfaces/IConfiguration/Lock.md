---
type: property
interface: IConfiguration
member: Lock
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - lock
  - iconfiguration
  - configuration
  - boolean
  - change
  - properties
  - vba
readonly: null
---

# IConfiguration.Lock

Gets or sets whether the configuration is locked.

## Signature

```csharp
System.Boolean Lock {get; set;}
```
## Parameters

None.

## Return Value

True for locked configuration, false for unlocked configuration

## Remarks

The names of configurations should not contain any of the special characters reserved
by SOLIDWORKS.

## Examples

- Change Configuration Properties (VBA) (Change_Configuration_Properties_Example_VB.htm)