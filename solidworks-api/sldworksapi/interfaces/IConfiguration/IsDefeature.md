---
type: method
interface: IConfiguration
member: IsDefeature
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.IsDerived
keywords:
  - isdefeature
  - iconfiguration
  - configuration
  - defeature
  - boolean
---

# IConfiguration.IsDefeature

Gets whether this configuration is a defeature configuration.

## Signature

```csharp
System.Boolean IsDefeature()
```
## Parameters

None.

## Return Value

True if this configuration is a defeature configuration, false if not

## Remarks

A defeature configuration is a type of derived configuration. After using the Defeature tool to remove details from assemblies, multibody parts, and single-body parts, you can save the less-detailed model as a configuration and maintain references to the original part or assembly.
For more information see the
SOLIDWORKS Design user-interface help > Assemblies > Other Assembly Techniques > Defeature
topic.

## See Also

- `IConfiguration.IsDerived`