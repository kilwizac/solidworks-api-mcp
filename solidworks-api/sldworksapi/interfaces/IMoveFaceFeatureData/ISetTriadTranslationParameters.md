---
type: method
interface: IMoveFaceFeatureData
member: ISetTriadTranslationParameters
returns: void
parameters:
  -
    name: TranslationParameters
    type: System.Double
    description: in-process, unmanaged C++: pointer to an array of three doubles for the X, Y, and Z translation parameters VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData.IGetTriadTranslationParameters
  - IMoveFaceFeatureData.TriadTranslationParameters
keywords:
  - isettriadtranslationparameters
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - triad
  - translation
  - parameters
  - double
  - void
---

# IMoveFaceFeatureData.ISetTriadTranslationParameters

Sets the translation parameters for this Move Face feature.

## Signature

```csharp
void ISetTriadTranslationParameters( 
   ref System.Double
TranslationParameters
)
```
## Parameters

- `TranslationParameters` (System.Double): in-process, unmanaged C++: pointer to an array of three doubles for the X, Y, and Z translation parameters VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## See Also

- `IMoveFaceFeatureData.IGetTriadTranslationParameters`
- `IMoveFaceFeatureData.TriadTranslationParameters`