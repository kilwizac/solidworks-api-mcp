---
type: method
interface: ISketchSegment
member: GetConstraints
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - IModelDoc2.SketchConstraintsDelAll
  - ISketchSegment.IGetConstraints
  - ISketchSegment.IGetConstraintsCount
keywords:
  - constraints
  - sketch
  - see
  - also
  - isketch
  - getconstraints
  - isketchsegment
  - segment
  - object
  - vba
---

# ISketchSegment.GetConstraints

Gets the constraints for this sketch segment.

## Signature

```csharp
System.Object GetConstraints()
```
## Parameters

None.

## Return Value

Array of sketch segment constraints (see Remarks )

## Remarks

The available constraint values are as follows:
sgHORIZONTAL
sgHORIZPOINTS
sgVERTICAL
sgVERTPOINTS
sgCOLINEAR
sgCORADIAL
sgPERPENDICULAR
sgPARALLEL
sgTANGENT
sgCONCENTRIC
sgCOINCIDENT
sgSYMMETRIC
sgATMIDDLE
sgATINTERSECT
sgATPIERCE
sgFIXED
sgANGLE
sgARCANG180
sgARCANG270
sgARCANG90
sgARCANGBOTTOM
sgARCANGLEFT
sgARCANGRIGHT
sgARCANGTOP
sgDIAMETER
sgDISTANCE
sgSAMELENGTH
sgOFFSETEDGE
sgSNAPANGLE
sgSNAPGRID
sgSNAPLENGTH
sgUSEEDGE
sgMERGEPOINTS

## Examples

- Get Sketch Constraints (VBA) (Get_Sketch_Constraints_Example_VB.htm)

## See Also

- `IModelDoc2.SketchConstraintsDelAll`
- `ISketchSegment.IGetConstraints`
- `ISketchSegment.IGetConstraintsCount`