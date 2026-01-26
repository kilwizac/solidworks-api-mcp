---
type: method
interface: ISldWorks
member: IGetMassProperties2
returns: System.Boolean
parameters:
  -
    name: FilePathName
    type: System.String
    description: Document path and file name
  -
    name: ConfigurationName
    type: System.String
    description: Name of configuration to use
  -
    name: MPropsData
    type: System.Double
    description: Array of doubles
  -
    name: Accuracy
    type: System.Int32
    description: 0 = as is 1 = default 2 = maximum
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IMassProperty
  - ISldWorks.GetMassProperties2
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - mass
  - properties
  - imassproperty
  - igetmassproperties2
  - isldworks
  - sld
  - works
  - properties2
  - file
  - path
  - name
  - string
  - props
  - data
  - double
  - accuracy
  - int32
  - boolean
---

# ISldWorks.IGetMassProperties2

Gets the mass properties from the specified document for the specified configuration.

## Signature

```csharp
System.Boolean IGetMassProperties2( 
   System.String
FilePathName
,
   System.String
ConfigurationName
,
   ref System.Double
MPropsData
,
   System.Int32
Accuracy
)
```
## Parameters

- `FilePathName` (System.String): Document path and file name
- `ConfigurationName` (System.String): Name of configuration to use
- `MPropsData` (System.Double): Array of doubles
- `Accuracy` (System.Int32): 0 = as is 1 = default 2 = maximum

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles of size 13; last element is the accuracy at which mass properties are calculated VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

You can get the density of the current SOLIDWORKS part using
ISldWorks::GetUserPreferenceDoubleValue
and swMaterialPropertyDensity. If the density has not been explicitly set by the user, then SOLIDWORKS uses 1.0. You can also derive the density of the body from the following calculation:
Density = ( Mass / Volume )
Consistent with all other functions, this method returns metric units unless otherwise specified.
If this
IModelDoc2
object is an assembly, then any suppressed components are not included in the mass property analysis. See
IComponent2::GetSuppression
to determine the state of each of the assembly components.
This method returns an empty array if mass properties are not calculated when saving the model. This is a system-level setting and is controlled by
ISldworks::SetUserPreferenceToggle
and swUpdateMassPropsDuringSave.
NOTE:
The calculated origin for the return values is based on the default coordinate systems of the IModelDoc2, not on the a selected coordinate system.

## See Also

- `IMassProperty`
- `ISldWorks.GetMassProperties2`